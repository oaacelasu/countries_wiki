import React from 'react';

function BoldLabel({label, value}) {
    return (
        <p>
            <strong>{label}:</strong> {value}
        </p>
    );
}

export default BoldLabel;