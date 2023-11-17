// import "./Loading.css";
import styled from "styled-components";

const LoadBackgroundStyle = styled.div`
    display: flex;
    background-color: #f6f6f6;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
`

const EmptyBox = styled.div`
  margin-top: 50%;
`

const LoadingText = styled.p`
  font-size: 5em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 1000%;
  width: 100%;
  animation: pulse 5s infinite;

@keyframes pulse {
  0%{
    color: whitesmoke;
  }
  25%{
    color: #f34f85;
  }
  50%{
    color: #745399;
  }
  75%{
    color: #e1287e;
  }
  100%{
    color: #848ca4;
  }
}

/* border: black 5px solid;
border-radius: 50em;
margin-left: 3em;
margin-right: 5em; */
`

const Loading = () => {
  return (
    <LoadBackgroundStyle>
      <EmptyBox></EmptyBox>
        <LoadingText>Loading</LoadingText>
    </LoadBackgroundStyle>
  );
};
export default Loading;