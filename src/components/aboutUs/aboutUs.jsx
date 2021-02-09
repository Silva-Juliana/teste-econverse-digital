import React from 'react'
import '../aboutUs/aboutUs.scss'
import arrowLeft from '../../images/caminho1570.png'
import arrowRight from '../../images/arrowBlue.png'
import imageFelipe from '../../images/felipe.png'

function AboutUs() {
	return (
		<>
			<div className="container-about">
				<div className="box-about">
						<h5 className="h5-about">SOBRE NÓS</h5>
						<p className="p-about"> is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever 
								since the 1500s, when an unknown printer took a galley of type 
								and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the 1960s with 
								the release of Letraset sheets containing Lorem
						</p>
						<div className="box-grey">
								<div className="container-resume-about">
										<div>
												<img className="arrow_left" src={arrowLeft}/>
										</div>
										<div className="box-resume-about">
												<img src={imageFelipe}/>
												<div className="descripition-felipe">
														<span className="span-about">Felipe Salmin</span>
														<p className="text-about">Designer</p>
												</div>
												<div className="arrow-white">
												</div>
												<div>
													<div className="box-white">
															<p className="p-text-about">
																	It is a long established fact that a reader will be distracted 
																	by the readable content of a page when looking at its layout
																	by the readable content of a page when looking at its layout
															</p>
													</div>
												</div>
										</div>
										<div>
												<img className="arrow_right"  src={arrowRight}/>
										</div>
									</div>
							</div>
					</div>
			</div>
		</>
	)
}
export default AboutUs;