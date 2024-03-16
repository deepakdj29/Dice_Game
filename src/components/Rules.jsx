import styled from 'styled-components';

const Rules = () => {
    return (
        <RuleContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number on the Top.</p>
                <p>Click on dice.</p>
                <p>After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice.</p>
                <p>If you make the wrong guess, then 2 points will be deducted.</p>
            </div>
        </RuleContainer>
    );
};

export default Rules;

const RuleContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #fbf1f1;
    padding: 20px;
    h2 {
        font-size: 24px;
        text-align: center;
    }
    .text {
        margin-top: 24px;
    }

    @media (max-width: 768px) {
        /* Adjust styles for smaller screens */
        max-width: 90%;
        padding: 16px;
        h2 {
            font-size: 20px;
        }
        .text {
            font-size: 16px;
        }
    }
`;
