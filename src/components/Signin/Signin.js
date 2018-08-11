import React from 'react';
import LinkedIn from 'react-linkedin-login';
import autobind from 'autobind-decorator';
import './Signin.css';
const Signin=({onRouteChange})=>{
	return(
		<article className="br2  center">
		  <div className=" ba pa5 shadow-5 br2">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
		      </div>
		    </fieldset>
		    <div className="">
		      <input onClick={()=>onRouteChange('home')}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-75" type="submit" value="Sign in"/>
		    </div>
		    <div className="">
		      <LinkedIn
			        clientId='81hruber9hkipd'
			        callback={this.callbackLinkedIn}
			        className=""
			        text='LinkedIn' 
			  />
		    </div>
		    <div className="lh-copy mt3">
		    	<p onClick={()=>onRouteChange('register') } className="pointer">Register</p>
		    </div>
		  </div>
		 </article>
	);
}

export default Signin;