import styled from "styled-components";

const TotalScore = ({ score }) => {
    return (
        <ScoreContainer>
            <div className="">
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
        </ScoreContainer>
    );
};

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    margin-top: 30px;

    h1 {
        font-size: 6vw; /* Responsive font size */
        margin-bottom: 10px; /* Add margin to separate from the paragraph */
    }

    p {
        font-size: 3vw; /* Responsive font size */
        font-weight: 500; /* 500 is the font-weight value, not pixels */
    }

    @media (max-width: 768px) {
        /* Adjust styles for smaller screens */
        max-width: 90%; /* Adjust container width for smaller screens */
        
        h1 {
            font-size: 10vw; /* Adjust font size for smaller screens */
        }

        p {
            font-size: 5vw; /* Adjust font size for smaller screens */
        }
    }
`;
