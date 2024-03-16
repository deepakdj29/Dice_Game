import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ setError, selectedNumber, setSelectedNumber, error }) => {
    const Numbers = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    };

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="nav-content">
                {Numbers.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumber}
                        key={i}
                        onClick={() => NumberSelectorHandler(value)}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border-radius: 10px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    transition: 0.3s background ease-in;

    @media (max-width: 768px) {
        height: 56px;
        width: 56px;
        font-size: 18px;
    }
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;

    .nav-content {
        display: flex;
        gap: 12px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
    }

    .error {
        color: red;
    }

    @media (max-width: 768px) {
        align-items: center;

        .nav-content {
            gap: 8px;
        }

        p {
            font-size: 20px;
        }
    }
`;
