
import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Detail from '../Detail/Detail';

interface IDetail {
    title: string;
    description: string;
}
const Details = () => {
    const [details, setDetails] = useState<IDetail>({
        title: "",
        description: "",
    });
    const [allDetails, setAllDetails] = useState<IDetail[]>([]);

    const handleButton = () => {
        setAllDetails ([...allDetails, details])
        setDetails({
            title: "",
            description: ""
        });
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({...details, [e.target.name] : e.target.value});
        // console.log(allDetails);
    }
    
    const handleRemove = (title: string) => {
        const newContactList = allDetails.filter(t => t.title !== title)
        setAllDetails(newContactList)
    }
    
   

    return (
        
            <Container className="text-center">
            <div className="text-center mt-4">
                <h5>Please FillUp Title and Description to Make Your List </h5>
            </div>
            <div className="mt-5">
                <form>
                    
                        <input className="form-control" 
                        value={details.title} 
                        onChange={handleChange} 
                        type="text"  
                        name="title" 
                        placeholder="enter your title"/> 
                        <br/> <br/>
                        <input className="form-control"
                         value={details.description}
                         onChange={handleChange}
                         type="text"  
                         name="description"
                         placeholder="enter your description" />
                        <br/> 
                        <Button onClick={handleButton}>Submit </Button>
                    

                </form>
                <Row className="mt-3">
                    
                
                {
                    allDetails.map((det) => <Detail key={det.title} title={det.title} description={det.description} handleRemove={handleRemove} />)
                }
              
                </Row>
               
            </div>
            </Container>
        
    );
};

export default Details;