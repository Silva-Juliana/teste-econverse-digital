import React from 'react'
import background from '../../images/banner.png'
import '../slade/slade.scss'
import arrowLeft from '../../images/left.png'
import arrowRight from '../../images/right.png'

function Slade() {
	return(
		<>
		<div className="container-slade">
			<div style={{ backgroundImage: `url(${background})` }}  className="box-slade">
				<div className="informations-slade">
					<div  className="arrow-left" >
						<img src={arrowLeft}/>
					</div>
					<div className="text-slade">
						<span className="span-slade">NOVOS PRODUTOS</span>
						<strong id="strong-slade">INSTRUMENTOS</strong>
						<h2>PROFISSIONAIS</h2>
						<div id="box-a-check-out">
							<a className="a-check-out" href="">CONFIRA</a>
						</div>
					</div>
					<div className="arrow-right">
						<img src={arrowRight}/>
					</div>
				</div>
				<div id="click"> 
					<ul className="ul_click">
						<li> <button className="button_click"></button> </li>
						<li> <button className="button_click"></button> </li>
						<li> <button className="button_click_white"></button> </li>
						<li> <button className="button_click"></button> </li>
						<li> <button className="button_click"></button> </li>
					</ul>
    			</div>
			</div>
			</div>
		</>
	)
}

export default Slade;