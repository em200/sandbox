import React from 'react';
import Container from './container';
import '../css/hero.css';
import '../App.css';

const HeroContent = ({ title, description, ctaHref, cta }) => {
	return (
		<Container>
			<div className="hero-content">
				{title ? <h1>{title}</h1> : ''}
				{description ? <p>{description}</p> : ''}
				{ctaHref ? (
					<div style={{ paddingTop: '1em' }}>
						<a href={ctaHref}>
							<button>{cta}</button>
						</a>
					</div>
				) : (
					''
				)}
			</div>
		</Container>
	);
};

const Hero = ({ title, description, cta, ctaHref, backgroundImage }) => {
	return (
		<>
			{backgroundImage ? (
				<div
					className="hero"
					style={{
						background: `url('${backgroundImage}')`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					<div style={{ background: 'rgba(0,0,0,0.7)' }}>
						<HeroContent
							title={title}
							description={description}
							ctaHref={ctaHref}
							cta={cta}
						/>
					</div>
				</div>
			) : (
				<div className="hero" style={{ background: '#e15989' }}>
					<HeroContent
						title={title}
						description={description}
						ctaHref={ctaHref}
						cta={cta}
					/>
				</div>
			)}
		</>
	);
};

export default Hero;
