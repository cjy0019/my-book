import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';

const Signin = () => {
  return (
    <Row className={styles.signin_row} align='middle'>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col
            className={styles.signin_contents}
            span={12}
            style={{
              width: 800,
            }}>
            <img
              src='/img/bg_signin.png'
              alt='Signin'
              className={styles.signin_bg}
              style={{
                width: '100%',
              }}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline}></div>
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                name='email'
                placeholder='Email'
                autoComplete='email'
                className={styles.input}
              />
            </div>
            <div className={styles.email_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input
                type='password'
                autoComplete='current-password'
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button
                size='large'
                loading={false}
                className={styles.button}
                onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function click() {}
};

export default Signin;
