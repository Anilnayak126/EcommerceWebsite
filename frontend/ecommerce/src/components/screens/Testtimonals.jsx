import { testimonials } from "../../data/testtimonials";

function Testimonials() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div className="col-md-4 col-sm-6 mb-4" key={testimonial.id}>
            <div className="card h-100">
              <img
                src={testimonial.image} // Assuming testimonial object has an image property
                className="card-img-top"
                alt={testimonial.author}
                style={{ objectFit: 'cover', height: '200px' }} // Set height as needed
              />
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{testimonial.text}</p>
                  <footer className="blockquote-footer">{testimonial.author}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
