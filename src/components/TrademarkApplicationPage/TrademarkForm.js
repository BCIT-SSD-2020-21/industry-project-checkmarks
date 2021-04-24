import React from 'react';
import DetailSelectCard from './DetailSelectCard';
import TextSearchCard from './TextSearchCard';

const TrademarkForm = () => {
    return (
        <Card className={classes.outerCard}>
            <div className={classes.outerText}>
                <p style={{ color: 'red' }}>What type of Trademark? </p>
                <p style={{ color: 'red', fontSize: 15 }}>
                    Select all that apply
                </p>
            </div>
            {/* ======================================== */}
            {/* Text Search Form */}
            {/* ======================================== */}

            <TextSearchCard />

            {/* ======================================== */}
            {/* Logo card */}
            {/* ======================================== */}

            <LogoForm />

            {/* ======================================== */}
            {/* detail selection card */}
            {/* ======================================== */}
            <DetailSelectCard />

            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>

            <button className={classes.nextButton}>Next Step</button>
        </Card>
    );
};

export default TrademarkForm;
