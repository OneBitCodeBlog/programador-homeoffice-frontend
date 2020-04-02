import React from 'react';

import './index.css';

import icon from '../../assets/images/github.jpg';

export default function AboutContent() {
  return (
  	<section className="text-center">
	    <section className="page-header mt-3">
	    	<h4>Quem Somos</h4>
	    	<hr />
	    </section>

	    <section className="container">
	    	<p>
		    	Somos uma equipe de startup com o objetivo de centralizar as melhores 
		    	vagas disponíveis em outras plataformas e apresentá-las de maneira fácil
		    	e ágil para pessoas em busca de oportunidades.
		    </p>

		    <p>
		    	Também contamos com um chatbot de alarmes para anúncios de novas vagas
		    </p>
	    </section>

	    <section className="github mt-5">
	    	<section className="page-header p-3">
	    		<h4>Colaboradores do Projeto</h4>
	    		<hr />
	    	</section>

	    	<section className="list container">
	    		<section className="row">
	    			<section className="col-6">
	    				<a href="https://github.com/AnaSelma">
			    			- José da Esquina 
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>
		    		</section>

		    		<section className="col-6">
		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>

		    			<a href="">
			    			-  
			    			<img src={icon} alt="github icon" />
		    			</a>
		    		</section>
	    		</section>
	    	</section>
	    </section>	
	</section>
  );
}
