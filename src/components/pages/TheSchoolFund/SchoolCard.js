import React, { PropTypes } from 'react';

// Import Styles
import s from './SchoolCard.css';

class CircularProgressbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: props.initialAnimation ? 0 : props.percentage,
    };
  }

  componentDidMount() {
    if (this.props.initialAnimation) {
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.setState({
            percentage: this.props.percentage,
          });
        });
      }, 0);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      percentage: nextProps.percentage,
    });
  }

  render() {
    const radius = (50 - this.props.strokeWidth / 2);
    const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

    const diameter = Math.PI * 2 * radius;
    const progressStyle = {
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${((100 - this.state.percentage) / 100 * diameter)}px`,
    };

    return (
			<div className={s.schoolCard}>
				<h1 className={s.cardTitle}>Mathendu</h1>
				<div className={s.progressWrapper}>
		      <svg
		        className={`CircularProgressbar ${this.props.classForPercentage ? this.props.classForPercentage(this.props.percentage) : ''}`}
		        viewBox="0 0 100 100"
		      >
		        <path
		          className={s.progressTrail}
		          d={pathDescription}
		          strokeWidth={this.props.strokeWidth}
		          fillOpacity={0}
		        />

		        <path
		          className={s.progressPath}
		          d={pathDescription}
		          strokeWidth={this.props.strokeWidth}
		          fillOpacity={0}
		          style={progressStyle}
		        />

		        <text
		          className={s.progressText}
		          x={50}
		          y={50}
		        >
		        </text>
		      </svg>
					<div className={s.progressImageWrapper}>
						<img className={s.progressImage} src="/img/dyn.jpeg" />
					</div>
				</div>
				<div className={s.cardLocation}>Kenya</div>
				<p className={s.cardText}>Mathendu is the first born child in a family of two children.  His parents are peasant farmers and are unable to raise his fees for secondary school. Mathendu did his primary exam - KCPE in 2015 and was the top student at Kyaani Primary school with 365 marks. Mathendu is a very brilliant and focused boy who loves education. With beaming confidence he says "I wish to be an electrical engineer after completing school" Mathendu has an great a determination to join secondary school and study hard to make a career in electrical engineering.</p>
				<div className={s.cardFunding}>{this.props.textForPercentage(this.props.percentage)} Funded</div>
			</div>
    );
  }
}

CircularProgressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  initialAnimation: PropTypes.bool,
  classForPercentage: PropTypes.func,
  textForPercentage: PropTypes.func,
};

CircularProgressbar.defaultProps = {
  strokeWidth: 8,
  textForPercentage: (percentage) => `${percentage}%`,
  initialAnimation: false,
};

export default CircularProgressbar;
