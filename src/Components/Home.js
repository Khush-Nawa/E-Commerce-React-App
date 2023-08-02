// Import necessary components and modules
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Define the functional component 'DarkVariantExample'
function DarkVariantExample() {
  // JSX code to render the DarkVariantExample component
  return (
    <>
      {/* Carousel with dark theme */}
      <Carousel data-bs-theme="dark">
        {/* First slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://www.livemint.com/lm-img/img/2023/04/21/1600x900/commerce_1680804490332_1682064977443.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={500}
            src="https://www.upwordstranslation.com/admin/uploads/produtos/95.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Future Collection section */}
      <div className='container my-2'>
        <h1 className="text-center my-2">Future Collection Comming Soon...</h1>
        <h3 className="my-2">Join the Fun.</h3>

        {/* Card deck for different product categories */}
        <div className="container d-lg-flex justify-content-lg-around">
          {/* Cricket Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://5.imimg.com/data5/SELLER/Default/2021/2/QT/JD/AW/119792758/rk-nimbus-cricket-kit-men-size-1000x1000.png" />
            <Card.Body>
              <Card.Title>Cricket</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Foot Ball Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://m.media-amazon.com/images/I/71W8rpUFKpL._SX679_.jpg" />
            <Card.Body>
              <Card.Title>Foot Ball</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Basket Ball Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGNsNuPCiUw1fDL8qKD7kFGbgqj7-jPnQ_wnjGq6OJAmdMq6NdpKoYOYICJWhLwYaSxE&usqp=CAU" />
            <Card.Body>
              <Card.Title>Basket Ball</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Base Ball Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://media.istockphoto.com/photos/leather-glove-with-baseball-and-bat-on-white-picture-id137517288?k=20&m=137517288&s=612x612&w=0&h=8q-8fDhtprXEI5CvmC1nuYykSuT9Y9HTG3JuALgOZ2E=" />
            <Card.Body>
              <Card.Title>Base Ball</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
        </div>
        
        {/* Gadgets and Accessories section */}
        <h3 className="my-2">Gadgets and Accessories</h3>
        <div className="container d-lg-flex justify-content-lg-around">
          {/* Laptops and More Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://images.news18.com/ibnlive/uploads/2020/08/1597555941_wfh-gadgets-copy-2.jpg" />
            <Card.Body>
              <Card.Title>Laptops and More</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Smart Watches and More Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://images.immediate.co.uk/production/volatile/sites/4/2022/03/Best-hiking-gadgets-and-hiking-accessories-18625a4.jpg" />
            <Card.Body>
              <Card.Title>Smart Watches and More</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Home Appliances Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://static.toiimg.com/thumb/msid-93542239,imgsize-580377,width-400,resizemode-4/93542239.jpg" />
            <Card.Body>
              <Card.Title>Home Appliances</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Office Appliances Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/dbdmp6pkcgmmiiiyebv5/work-from-home-desk-cycle?fimg-client-default" />
            <Card.Body>
              <Card.Title>Office Appliances</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Clothing Products section */}
        <h3 className="my-2">Clothing Products</h3>
        <div className="container d-lg-flex justify-content-lg-around">
          {/* Men's Wear Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg" />
            <Card.Body>
              <Card.Title>Mens Wear</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Women Ethnic Wear Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://khadijabeauty.com/wp-content/uploads/2018/05/DA9E62D3-EA61-43BC-A173-A227F6D84588.jpeg" />
            <Card.Body>
              <Card.Title>Women Ethnic Wear</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Women Casual Wear Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://www.apparelsearch.com/clothes/womens/j/juniors_fashion_2019.jpg" />
            <Card.Body>
              <Card.Title>Women Casual Wear</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
          {/* Kids Wear Card */}
          <Card className='border-dark my-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" height={200} src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1668,w_2500,x_0,y_363/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/IMG_9760_c2w9no.jpg" />
            <Card.Body>
              <Card.Title>Kids Wear</Card.Title>
              <Card.Text>
                Limited period Offer
              </Card.Text>
              <Button variant="dark">Hurry Grab Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

// Export the DarkVariantExample component as the default export of this module
export default DarkVariantExample;
