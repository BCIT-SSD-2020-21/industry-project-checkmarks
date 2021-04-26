import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const DetailSelectCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.detailsCard}>
            <FormControlLabel control={<Checkbox />} label="Others " />
            <p style={{ color: 'red' }}>Select all that Apply </p>
            <p style={{ color: 'red', fontSize: 12 }}>
                For below selections, <strong>contact with lawyer</strong> is
                required to process the application.
            </p>

            {/* Selection section */}

            <div className={classes.selectionFlex}>
                {/* column 1 */}
                <FormGroup column>
                    <FormControlLabel
                        control={
                            <Checkbox
                            // checked={state.checkedA}
                            // onChange={handleChange}
                            // name="checkedA"
                            />
                        }
                        label="Color"
                    />
                    <FormControlLabel control={<Checkbox />} label="Position" />
                    <FormControlLabel control={<Checkbox />} label="Hologram" />
                    <FormControlLabel control={<Checkbox />} label="Motion" />
                    <FormControlLabel control={<Checkbox />} label="Motion" />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Mode of packaging goods"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Three dimensional"
                    />
                </FormGroup>

                {/* column 2 */}

                <FormGroup column>
                    <FormControlLabel control={<Checkbox />} label="Sound" />
                    <FormControlLabel control={<Checkbox />} label="Taste" />
                    <FormControlLabel control={<Checkbox />} label="Scent" />
                    <FormControlLabel control={<Checkbox />} label="Texture" />
                </FormGroup>
            </div>
        </Card>
    );
};

export default DetailSelectCard;
const useStyles = makeStyles((theme) => ({
    detailsCard: {
        width: '75%',
        margin: 'auto',
        marginTop: '3%',
    },
    selectionFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
}));
