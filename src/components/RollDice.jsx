import styled from "styled-components";
import Rules from "./Rules";

const RollDice = ({ setShowRule, showRule, currentDice, Rolldice, setScore }) => {
    return (
        <HeroSection>
            <div className="content">
                <img onClick={Rolldice} src={`/images/dice/dice_${currentDice}.png`} alt="Dice" />
                <h1>Click The Dice To Roll</h1>
            </div>
            <div className="btn">
                <Button onClick={() => setScore(0)}>Reset Score</Button>
                <Button onClick={() => setShowRule(prev => !prev)}>
                    {showRule ? "Hide" : "Show"} Rules
                </Button>
            </div>
            {showRule && <Rules />}
        </HeroSection>
    );
};

export default RollDice;

const HeroSection = styled.div`
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        gap: 30px;
        font-weight: 700;
        cursor: pointer;
    }

    .btn {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .content {
            margin-top: 50px;
        }
    }

    img {
        -webkit-tap-highlight-color: transparent; /* For iOS */
        tap-highlight-color: transparent; /* For Android */
    }
`;

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

    @media (max-width: 768px) {
        width: 180px;
        font-size: 14px;
    }
`;
