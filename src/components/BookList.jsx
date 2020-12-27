import axios from 'axios';
import React, { Component } from 'react';
import { sleep } from '../utils';
import {
  LoadingOutlined,
  ReloadOutlined,
  PoweroffOutlined,
  BookOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import BookItem from './BookItem';
import styled from 'styled-components';
import img from '../img/hohobook.png';
const { Search } = Input;
// 스타일

const MyContainer = styled.div`
  padding: 30px 70px;
`;

const MyHeader = styled.header`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* z-index: 100; */
`;

const StyleButton = {
  marginRight: '15px',
  fontSize: '18px',
  backgroundColor: '#FF8B8B',
  border: '1px solid #FF8B8B',
  color: '#ffffff',
  borderRadius: '5px',
  marginTop: '3vh',
};

const Logout = {
  backgroundColor: '#fdf9da',
  fontSize: '18px',
  border: '1px solid #F9F7E8',
  color: '#61bfad',
  marginRight: '30px',
  borderRadius: '5px',
};

const SectionVisual = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 65%;
  width: 100%;
  height: 45vh;
  /* z-index: -100; */

  &::before {
    content: '';
    z-index: -50;
    background-color: black;
    opacity: 0.3;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
      <MyContainer>
        <SectionVisual>
          <MyHeader>
            <div>
              <Button
                type='primary'
                icon={<BookOutlined />}
                style={StyleButton}>
                Add books
              </Button>
              <Button
                type='primary'
                icon={<PoweroffOutlined />}
                loading={0}
                style={Logout}>
                Logout
              </Button>
            </div>
          </MyHeader>
          <h3
            style={{ marginBottom: ' 1vh', fontSize: '60px', color: 'white' }}>
            BOOK STUDIO
          </h3>

          <Search
            placeholder='지금 떠오르는 책을 찾아보세요...'
            allowClear
            size='large'
            style={{
              margin: '0 10px',
              width: '35vw',
              marginBottom: '28vh',
            }}
          />
        </SectionVisual>
        <FlexContainer>
          {books.length === 0 && <p>데이터가 없습니다.</p>}
          {books.length !== 0 &&
            books.map((book, index) => {
              return <BookItem key={index} {...book} />;
            })}
        </FlexContainer>
      </MyContainer>
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
