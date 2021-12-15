import React from 'react';

const Description = () => {

    return(

        <div className = 'main'>
            <div className = 'mainDiv'>
                <h1>Welcome to our Budget App!</h1>
                <br/>
                <p>
                    To begin, close the Total Budget Tab.
                </p>
                <p>
                    Select the Actual Income tab and log your incomes. You can also update and delete logged incomes.
                </p>
                <p>
                    Select the Actual Expense tab and log your expenses. You can also update and delete logged expenses.
                </p>
                <p>
                    Back to top of the page and select the Total Budget tab. Put your Budget Income/Expenses and press Get Actual Income/Expenses Values. 
                </p>
                <p>
                    Results will render under Budget-To-Actuals
                </p>
            </div>
        </div>
    );
};

export default Description;