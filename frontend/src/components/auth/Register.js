// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormFeedback
// } from "reactstrap";
// import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";

// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       confirm_password: "",
//       errors: {}
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       confirm_password: this.state.confirm_password
//     };

//     this.props.registerUser(newUser, this.props.history);
//     if (!this.state.errors.length > 0) {
//       this.setState({
//         name: "",
//         email: "",
//         password: "",
//         confirm_password: "",
//         errors: {}
//       });
//     }
//   }
//   render() {
//     const { errors } = this.state;
//     return (
//       <div className="container h-100">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <Card>
//               <CardHeader>Register</CardHeader>
//               <CardBody>
//                 {/* Form Starts Here */}
//                 <Form noValidate onSubmit={this.onSubmit}>
//                   <FormGroup row>
//                     <Label className="text-md-right" for="name" sm={4}>
//                       Name
//                     </Label>
//                     <Col sm={8}>
//                       <Input
//                         invalid={errors.name}
//                         type="name"
//                         name="name"
//                         id="name"
//                         value={this.state.name}
//                         onChange={this.onChange}
//                       />
//                       <FormFeedback>{errors.name}</FormFeedback>
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                     <Label className="text-md-right" for="email" sm={4}>
//                       Email
//                     </Label>
//                     <Col sm={8}>
//                       <Input
//                         type="email"
//                         invalid={errors.email}
//                         name="email"
//                         id="email"
//                         value={this.state.email}
//                         onChange={this.onChange}
//                       />
//                       <FormFeedback>{errors.email}</FormFeedback>
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                     <Label className="text-md-right" for="password" sm={4}>
//                       Password
//                     </Label>
//                     <Col sm={8}>
//                       <Input
//                         type="password"
//                         invalid={errors.password}
//                         name="password"
//                         id="password"
//                         value={this.state.password}
//                         onChange={this.onChange}
//                       />
//                       <FormFeedback>{errors.password}</FormFeedback>
//                     </Col>
//                   </FormGroup>
//                   <FormGroup row>
//                     <Label
//                       className="text-md-right"
//                       for="confirm_password"
//                       sm={4}
//                     >
//                       Confirm Password
//                     </Label>
//                     <Col sm={8}>
//                       <Input
//                         type="password"
//                         name="confirm_password"
//                         invalid={errors.confirm_password}
//                         id="confirm_password"
//                         value={this.state.confirm_password}
//                         onChange={this.onChange}
//                       />
//                       <FormFeedback>{errors.confirm_password}</FormFeedback>
//                     </Col>
//                   </FormGroup>
//                   <FormGroup check row>
//                     <Col sm={{ size: 10, offset: 4 }}>
//                       <Button color="primary">Register</Button>
//                     </Col>
//                   </FormGroup>
//                 </Form>

//                 {/* Form Ends Here */}
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(withRouter(Register));
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import {
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };

    this.props.registerUser(newUser, this.props.history);
    if (!this.state.errors.length > 0) {
      this.setState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        errors: {}
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="h-100vh custom-bg-color">
        <div className="box">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
      <div className="container h-100">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="">
              <div className="text-white">
                <CardBody>
                  <h2 className="display-4 mb-2 font-weight-bold error-text text-center"><strong>Register</strong></h2>
                  <h4 className="text-white-80 mb-7 text-center">Create New Account</h4>
                  <div className="row">
                  <div class="col-9 d-block mx-auto">
                  <Form noValidate onSubmit={this.onSubmit}>
                    <FormGroup>
                    <div className="input-group mb-4">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<i className="fe fe-user"></i>
														</div>
													</div>
													
												
                      <Input
                        invalid={errors.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Username"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      </div>
                      <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <div className="input-group mb-4">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<i className="fe fe-mail"></i>
														</div>
													</div>
                      <Input
                        type="email"
                        invalid={errors.email}
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      </div>
                      <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <div className="input-group mb-4">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<i className="fe fe-lock"></i>
														</div>
													</div>
                      <Input
                        type="password"
                        invalid={errors.password}
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      	</div>
                      <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <div className="input-group mb-4">
													<div className="input-group-prepend">
														<div className="input-group-text">
															<i className="fe fe-lock"></i>
														</div>
													</div>
                      <Input
                        type="password"
                        name="confirm_password"
                        invalid={errors.confirm_password}
                        id="confirm_password"
                        placeholder="Confirm Password"
                        value={this.state.confirm_password}
                        onChange={this.onChange}
                      />
                      </div>
                      <FormFeedback>{errors.confirm_password}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                      <Label check>
                        <Input type="checkbox" />{' '}
                        <span>Agree the Terms and policy</span>
                      </Label>
                    </FormGroup>
                    <Button color="secondary" block>Create New Account</Button>
                  </Form>
                  
                  </div>
                  </div>
                  <div className="text-center pt-4">
                    <div className="font-weight-normal fs-16">You Already have an account <a href="#" className="btn-link font-weight-normal text-white-80">Login Here</a></div>
                  </div>
                </CardBody>
                <div className="custom-btns text-center">
                  <Button className="btn btn-icon"><span className="btn-inner-icon"><i className="fa fa-facebook-f"></i></span></Button>
                  <Button className="btn btn-icon"><span className="btn-inner-icon"><i className="fa fa-google"></i></span></Button>
                  <Button className="btn btn-icon"><span className="btn-inner-icon"><i className="fa fa-twitter"></i></span></Button>
                  <Button className="btn btn-icon"><span className="btn-inner-icon"><i className="fa fa-pinterest-p"></i></span></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center">
            <img src="../../assets/images/png/login.png" alt="img" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
