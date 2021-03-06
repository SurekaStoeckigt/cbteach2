import React, { Component } from "react";
import PropTypes from "prop-types";
import { Slider as SliderDHX } from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class SliderConfigured extends Component {
	componentDidMount() {
		this.slider = new SliderDHX(this.el, {
			min: 0,
			max: 100,
			step: 1,
			thumbLabel: true,
			tick: 1,
			majorTick: 10,
			tickTemplate: v => v,
		});
	}
	componentWillUnmount() {
		this.slider.destructor();
	}
	render() {
		return <div style={{ width: "600px" }} ref={el => (this.el = el)}></div>;
	}
}

SliderConfigured.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	mode: PropTypes.oneOf(["vertical", "horizontal"]),
	range: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
	inverse: PropTypes.bool,
	tooltip: PropTypes.bool,
	css: PropTypes.string,
	tick: PropTypes.number,
	tickTemplate: PropTypes.func,
	majorTick: PropTypes.number,
	label: PropTypes.string,
	required: PropTypes.bool,
	helpMessage: PropTypes.string,
	labelPosition: PropTypes.string,
	labelWidth: PropTypes.string,
	hiddenLabel: PropTypes.bool,
};

export default SliderConfigured;