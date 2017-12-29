import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Surfing extends React.Component {

  render(){

      return (
        <Card shadow={0} style={{ margin: 'auto', textAlign: 'center' }}>
           <CardHeader
             title="Surfing and Windsurfing"
             subtitle="Will code for waves"
             actAsExpander={true}
           />
           <CardText  >
             The joys of being on the water
           </CardText>
        </Card>
      );
  }
}
