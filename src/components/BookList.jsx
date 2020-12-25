import axios from 'axios';
import React, { Component } from 'react';
import { sleep } from '../utils';
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import BookItem from './BookItem';

export default class BookList extends Component {
  state = {
    books: [],
    loading: false,
    error: null,
  };

  render() {
    const { books, loading, error } = this.state;

    if (error !== null) {
      const errorType = error.response.data.error;
      if (errorType === 'INVALID_TOKEN') {
        return (
          <div>
            <h1>Book List{loading && <LoadingOutlined />}</h1>
            <p>
              유효하지 않은 토큰 입니다.
              <Button
                shape='circle'
                onClick={this.reload}
                icon={<ReloadOutlined />}></Button>
            </p>
          </div>
        );
      }
    }

    return (
      <div>
        <h1>Book List{loading && <LoadingOutlined />}</h1>
        {books.length === 0 && <p>데이터가 없습니다.</p>}
        {books.length !== 0 &&
          books.map((book) => {
            return <BookItem {...book} />;
          })}
      </div>
    );
  }

  getBooks = async () => {
    try {
      // 서버에 책 리스트 다오.
      this.setState({ loading: true });
      const response = await axios.get('https://api.marktube.tv/v1/book', {
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      });

      await sleep(2000);
      //받은 책 리스트로 다시 랜더 해줘 <= state
      this.setState({ books: response.data, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error });
    }
  };

  async componentDidMount() {
    await this.getBooks();
  }
  reload = async () => {
    this.setState({ error: null });
    await this.getBooks();
  };
}
