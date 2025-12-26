import React, { Component } from 'react'

export class Contact extends Component {
  static propTypes = {

  }

  render() {
    return (
  <div className="container">
<section class="py-5">
  <div class="container">
    <h1 class="text-center mb-5">Contact Us</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Your Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
      <div class="col-md-6">
        <h4>Our Office</h4>
        <p>123 Business Street<br />City, Country 12345</p>
        <h4>Email</h4>
        <p>support@mycompany.com</p>
        <h4>Phone</h4>
        <p>+1 (555) 123-4567</p>
        <h4>Working Hours</h4>
        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  </div>
</section>

</div>
    )
  }
}

export default Contact
