import styled from "styled-components";
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRule, setShowRule] = useState(false);

    const GenerateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const Rolldice = () => {
        const RandomNo = GenerateRandom(1, 7);
        setCurrentDice(RandomNo);

        if (!selectedNumber) {
            setError("You Have To Select A Number");
            return;
        }

        if (selectedNumber === RandomNo) {
            setScore(prev => prev + RandomNo);
        } else {
            if (score > 1) {
                setScore(prev => prev - 2);
            }
        }

        setSelectedNumber(undefined);
    };

    return (
        <>
            <NavSection>
                <div className="content">
                    <TotalScore score={score} />
                    <NumberSelector
                        setError={setError}
                        error={error}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}
                    />
                </div>
            </NavSection>

            <RollDice
                setShowRule={setShowRule}
                showRule={showRule}
                currentDice={currentDice}
                Rolldice={Rolldice}
                setScore={setScore}
            />
        </>
    );
};

export default GamePlay;

const NavSection = styled.div`
    .content {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    @media (max-width: 768px) {
        .content {
            flex-direction: column;
            align-items: center;
        }
    }
`;
