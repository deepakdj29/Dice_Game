import styled from 'styled-components';

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="../images/dices.png" />
            </div>

            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>

            <Footer>Created By <span>Deepak Bhatt</span></Footer>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    img {
        height: 350px;
    }
`

const Button = styled.button`
    align-items: center;
    padding: 10px 18px;
    font-size: 16px;
    cursor: pointer;
    width: 220px;
    border: none;
    height: 44px;
    background: #000000;
    border-radius: 5px;
    color: white;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`

const Footer = styled.footer`
    position: absolute;
    bottom: 10px;
    font-size: 14px;
    color: #333;
    text-align: center;
    width: 100%;

    span {
        font-weight: bold;
    }
`
