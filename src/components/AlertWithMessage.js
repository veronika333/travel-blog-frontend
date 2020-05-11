import { Alert, Button } from "react-bootstrap";
import React, { useParams } from 'react';

export default () => {
    const { message, forceReload } = useParams();

    return (
        <div>
            <Alert variant={forceReload ? "success" : "warning"}>
                <Alert.Heading>{message}</Alert.Heading>
                {forceReload ? <p>Pleases try again later</p> : ''}
            </Alert>

            {
                forceReload ?
                <Button onClick={ forceReload } variant="warning" size="smd">
                    Back to experiences
                </Button> : 
                ''
            }
        </div>

    );
}