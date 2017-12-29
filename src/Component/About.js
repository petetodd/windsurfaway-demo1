import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class About extends React.Component {

    render(){

        return (
          <Card shadow={0} style={{ margin: 'auto', textAlign: 'center' }}>
             <CardHeader
               title="About Windsurfaway"
               subtitle="Just some subtitle"
               actAsExpander={true}
             />
             <CardText  >
               And lots of text about Windsurfaway!
             </CardText>
          </Card>
        );
    }
}
