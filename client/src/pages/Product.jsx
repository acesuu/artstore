import { Add, Category, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Blogs from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Name = styled.h1`
  font-weight: 200;
`;
const  Category1 = styled.h1`
  font-weight: 61;
  
`;
const Owner = styled.h1`
  font-weight: 110;
`;
const  Created = styled.h1`
  font-weight: 40;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46UMkW3LSU421cnN9qWfM3sTxuU7Gx0zfUg&usqp=CAU" />
        </ImgContainer>
        <InfoContainer>
        {/* id: 1,
        
        
        name: "Shotto Bhandar",
        description: "Lorem Ipsum dolores",
        price: "580.00/-",
        owner: "Helal SHah",
        createdAt: "April 17, 2022" */}
          <Category1>Oil Painting</Category1>
          <Name>Shotto Bhandar</Name>
          <Desc>
          Lorem Ipsum dolores lorem Ipsum Dolores Lorem Ipsum DOlores lorem ipsum dolores lorem ipsum dolores
          </Desc>
          <Price>৳580.00</Price>
          <Owner>Helal SHah</Owner>
          <Created>April 17, 2022</Created>
          
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
  
        </InfoContainer>
      </Wrapper>
      <Blogs />
      <Footer />
    </Container>
  );
};

export default Product;