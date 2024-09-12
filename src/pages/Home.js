import Card from "../layout/Card"

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Card title="BULLMER Black" para="BULLMER Black Trendy Front and Back Printed oversized Round Neck T-shirt for men" image="images/oversized-tshirt.jpg" />
          </div>
          <div className="col-lg-4">
            <Card title="Half Sleeve Oversized" para="LEOTUDE Half Sleeve Oversized Printed T-Shirt for Men, Round Neck Longline Drop Shoulder" image="images/batman.jpg" />
          </div>
          <div className="col-lg-4">
            <Card title="TAGDO Men's Solid Shirt" para="TAGDO Men's Solid Shirt with Chest Pocket Short Sleeve Shirt for Summer Outdoor Activities" image="images/shirt.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home