import React from 'react' 
import Card from 'react-bootstrap/Card'

function Background() {
  return (
    <card style={{color:'green'}}>
        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                            </Card.Text>
                            <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>                    
 

    </card>
  )
}

export default Background