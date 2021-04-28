import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const DetailSelectCard = ({ otherType, info, setInfo, index }) => {
    const [isSelected, setIsSelected] = useState(false);

    // when user go back to the page , if type is already in the OtherTypes
    // check box will be checked
    useEffect(() => {
        const infoOfOtherType = info.OtherTypes;

        infoOfOtherType.forEach((userOtherType) => {
            if (userOtherType === otherType) {
                setIsSelected(true);
            }
        });
    }, []);

    //handle when checkbox is clicked
    const selectOtherType = () => {
        const infoOfOtherType = info.OtherTypes;

        if (isSelected) {
            // check if type already exist , remove from the OtherTypes array
            for (let i = 0; i < infoOfOtherType.length; i++) {
                if (infoOfOtherType[i] === otherType) {
                    infoOfOtherType.splice(i, 1);
                    break;
                }
            }
        } else {
            // otherwise add to the OtherTypes array
            infoOfOtherType.push(otherType);
        }

        setInfo({
            ...info,
            OtherTypes: infoOfOtherType,
        });
        setIsSelected((prev) => !prev);
    };

    return (
        // Selection section
        <div>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            onClick={selectOtherType}
                            checked={isSelected}
                        />
                    }
                    label={otherType}
                />
            </FormGroup>
        </div>
    );
};

export default DetailSelectCard;
