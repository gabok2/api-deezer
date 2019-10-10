import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    transition: border 0.25s ease-out;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #111;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #111;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
  button {
    font: bold 12px/24px arial, helvetica, sans-aerif;
    background-color: white;
    text-align: center;
    color: black;
    border: 2px solid #f44336;
    padding: 5px;
    margin-left: 10px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: #f44336;
    color: white;
  }
`;
