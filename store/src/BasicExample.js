import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className='nuevo'>
    <Nav.Item>
      <Nav.Link href="/home">Home Page</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Menú</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" >
      Reserve With Us
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default BasicExample;