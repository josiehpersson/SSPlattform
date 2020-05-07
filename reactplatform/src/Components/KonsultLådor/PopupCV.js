import React from 'react';
import './POPUPCSS.css';
import PrimaryButton from '../PrimaryButton.js';

function PopupCV (props) {
return (
  <div>
<div className="text-center">
	<a href="#myModal" class="trigger-btn" className={props.className} data-toggle="modal"><i class="fas fa-file-alt"></i> CV</a>
</div>

<div id="myModal" className="modal fade">
	<div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header">
				<div className="icon-box">
					<i className="material-icons">&#xE876;</i>
				</div>
				<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body text-center">
				<h4>Great!</h4>	
				<p>Your account has been created successfully.</p>
				<button className="btn btn-success" data-dismiss="modal"><span>Start Exploring</span> <i className="material-icons">&#xE5C8;</i></button>
			</div>
		</div>
	</div>
</div>     
  </div>
)
}
export default PopupCV