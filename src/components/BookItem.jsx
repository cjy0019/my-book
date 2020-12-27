import React from 'react';
import { Button } from 'antd';
import {
  RightCircleOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import PostImg from '../img/PostitFinal.png';

const BookDiv = styled.div`
  background-image: url(${PostImg});
  background-position-y: 50%;
  background-position-x: 55%;
  background-repeat: no-repeat;
  background-size: 140% 140%;
  z-index: 100;
  width: 60vw;
  height: 50vh;
  padding: 40px;
  margin-top: 30px;
  /* border: 3px solid black; */
`;

const StyleP = styled.p`
  word-wrap: break-all;
  max-height: 11vh;
  overflow: hidden;
  word-break: keep-all;
  /* text-overflow: ellipsis; */
  padding-bottom: 20px;
  font-size: 13px;
`;

const Styleh2 = styled.h2`
  font-size: 25px;
  word-break: keep-all;
  text-align: center;
  font-weight: 700;
  margin-top: 20%;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 10px;
  vertical-align: top;
`;

const ButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: '0 0 0 0',
};

const TextDiv = styled.div`
  text-align: center;
  height: 3vh;
  font-size: 11px;
  text-align: center;
  padding: 0 10px;
`;

export default function BookItem({ title, author, message, url }) {
  return (
    <BookDiv>
      <Styleh2>{title}</Styleh2>
      <Flexbox>
        <a href={url} target='_BLANK' rel='noreferrer'>
          <Button style={ButtonStyle} icon={<RightCircleOutlined />} />
        </a>
        <a href={url} target='_BLANK' rel='noreferrer'>
          <Button style={ButtonStyle} icon={<EditOutlined />} />
        </a>
        <a href={url} target='_BLANK' rel='noreferrer'>
          <Button style={ButtonStyle} icon={<DeleteOutlined />} />
        </a>
      </Flexbox>
      <TextDiv>
        <h3 style={{ fontSize: '20px' }}>by {author}</h3>
        <StyleP>{message}</StyleP>
      </TextDiv>
    </BookDiv>
  );
}
