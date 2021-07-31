import React, { useState } from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';
import SliderText from 'react-native-slider-text';

const Score = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little interest or pleasure in doing things?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={10} stepValue={1} minimumValueLabel="Never" maximumValueLabel="Always" onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />
		
	  <Text style={styles.title}>How happy do you feel today?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={10} stepValue={1} minimumValueLabel="Never" maximumValueLabel="Always" onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />

	  <Text style={styles.title}>How lonely do you feel today?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={10} stepValue={1} minimumValueLabel="Never" maximumValueLabel="Always" onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />

	  <Text style={styles.title}>How much of you exercise routine have you kept with today?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={10} stepValue={1} minimumValueLabel="Never" maximumValueLabel="Always" onValueChange={(id) => setSliderValue(id)} sliderValue={sliderValue} />
    </View>
  );
};

const styles = StyleSheet.create({
//   background: {
// 	  color: yellow,
//   },	
  container: {
    flex: 1,
    padding: 10,
	backgroundColor: 'yellow',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 14,
    paddingVertical: 10,
  },
});

export default Score;
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Slider from "./Slider";
// import SliderCdn from "./SliderCdn";

// import SliderConfigured from "./SliderConfigured";
// import SliderProps from "./SliderProps";
// import SliderEvents from "./SliderEvents";

// class SliderPage extends Component {
// 	componentDidMount() {
// 		const setActiveExapmleInHead = (entries, observer) => {
// 			entries.forEach(entry => {
// 				entry.isIntersecting &&
// 					this.props.dispatch({
// 						type: "CHANGE_ACTIVE_EXAMPLE",
// 						playload: entry.target.id,
// 					});
// 				entry.isIntersecting &&
// 					[...this.el.querySelectorAll("section")].map(item => {
// 						item.classList.remove("active");
// 						if (item.id === entry.target.id) {
// 							item.classList.add("active");
// 						}
// 					});
// 			});
// 		};
// 		let observer = new IntersectionObserver(setActiveExapmleInHead, {
// 			root: document.querySelector("main"),
// 			rootMargin: "57px",
// 			threshold: 1,
// 		});
// 		[...this.el.querySelectorAll("section")].map(item => observer.observe(item));
// 		this.props.handleToolbarNavItems([...this.el.querySelectorAll("section")].map(item => item.id));
// 	}
// 	render() {
// 		return (
// 			<main ref={el => (this.el = el)}>
// 				<section className="hgroup active" id="basic">
// 					<h3>
// 						NPM basic initialization
// 						<a href="#basic" className="anchor" onClick={e => this.handleAnchorClick(e, "basic")}>
// 							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
// 						</a>
// 					</h3>
// 					<p>
// 						<a
// 							href="https://github.com/DHTMLX/react-widgets/blob/master/src/slider/Slider.js"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							Code example{" "}
// 						</a>
// 					</p>
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<Slider />
// 					</div>
// 				</section>
// 				<section className="hgroup" id="cdn">
// 					<h3>
// 						CDN basic initialization
// 						<a href="#cdn" className="anchor" onClick={e => this.handleAnchorClick(e, "cdn")}>
// 							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
// 						</a>
// 					</h3>
// 					<p>
// 						<a
// 							href="https://github.com/DHTMLX/react-widgets/blob/master/src/slider/SliderCdn.js"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							Code example{" "}
// 						</a>
// 					</p>
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<SliderCdn />
// 					</div>
// 				</section>
// 				<section className="hgroup" id="pre">
// 					<h3>
// 						Pre-configured component
// 						<a href="#pre" className="anchor" onClick={e => this.handleAnchorClick(e, "pre")}>
// 							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
// 						</a>
// 					</h3>
// 					<p>
// 						<a
// 							href="https://github.com/DHTMLX/react-widgets/blob/master/src/slider/SliderConfigured.js"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							Code example{" "}
// 						</a>
// 					</p>
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<SliderConfigured />
// 					</div>
// 				</section>
// 				<section className="hgroup" id="props">
// 					<h3>
// 						Configured using props
// 						<a href="#props" className="anchor" onClick={e => this.handleAnchorClick(e, "props")}>
// 							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
// 						</a>
// 					</h3>
// 					<p>
// 						<a
// 							href="https://github.com/DHTMLX/react-widgets/blob/master/src/slider/SliderProps.js"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							Code example{" "}
// 						</a>
// 					</p>
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<SliderProps />
// 					</div>
// 				</section>
// 				<section className="hgroup" id="events">
// 					<h3>
// 						Component events
// 						<a
// 							href="#events"
// 							className="anchor"
// 							onClick={e => this.handleAnchorClick(e, "events")}
// 						>
// 							<img src={`${process.env.PUBLIC_URL}/static/link.svg`} alt="" />
// 						</a>
// 					</h3>
// 					<p>
// 						<a
// 							href="https://github.com/DHTMLX/react-widgets/blob/master/src/slider/SliderEvents.js"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							Code example{" "}
// 						</a>
// 					</p>
// 					<div style={{ display: "flex", justifyContent: "center" }}>
// 						<SliderEvents />
// 					</div>
// 				</section>
// 			</main>
// 		);
// 	}
// }

// export default connect(state => state)(SliderPage);
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to CBTEACH!</Text>
//       <StatusBar style="auto" />

//       <Slider
//           style={{width: 200, height: 40}}
//           minimumValue={1}
//           maximumValue={10}
//           minimumTrackTintColor="#FFFFFF"
//           maximumTrackTintColor="#000000"
//       />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// class SliderExample extends React.Component{
//   static defaultProps = {
//     value: 1,
//   };

//   state = {
//     value: this.props.value,
//   };

//   render() {
//     return (
//       <View>
//         <Text style={styles.text}>
//           {this.state.minimumValue && +this.state.maximumValue.toFixed(3)}
//         </Text>
//         <Slider
//           step={1}
//           style={styles.slider}
//           {...this.props}
//           onValueChange={value => this.setState({value: value})}
//         />
//       </View>
//     );
//   }
// }
// class SlidingStartExample extends React.Component {
//   state = {
//     slideStartingValue: 0,
//     slideStartingCount: 0,
//   };

//   render() {
//     return (
//       <View>
//         <SliderExample
//           {...this.props}
//           onSlidingStart={value =>
//             this.setState({
//               slideStartingValue: value,
//               slideStartingCount: this.state.slideStartingCount + 1,
//             })
//           }
//         />
//         {/* <Text>
//           Starts: {this.state.slideStartingCount} Value:{' '}
//           {this.state.slideStartingValue}
//         </Text> */}
//       </View>
//     );
//   }
// }

// // class SlidingCompleteExample extends React.Component {
// //   state = {
// //     slideCompletionValue: 1,
// //     slideCompletionCount: 10,
// //   };

// //   render() {
// //     return (
// //       <View>
// //         <SliderExample
// //           {...this.props}
// //           onSlidingComplete={value =>
// //             this.setState({
// //               slideCompletionValue: value,
// //               slideCompletionCount: this.state.slideCompletionCount + 1,
// //             })
// //           }
// //         />
// //         <Text>
// //           Completions: {this.state.slideCompletionCount} Value:{' '}
// //           {this.state.slideCompletionValue}
// //         </Text>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   slider: {
// //     width: 300,
// //     opacity: 1,
// //     height: 50,
// //     marginTop: 50,
    
// //   },
// //   text: {
// //     fontSize: 14,
// //     textAlign: 'center',
// //     fontWeight: '500',
// //     margin: 10,
// //   },
// //   container:{
// //     backgroundColor: '#FFFF00'
// //   },
// // });

// // export const title = '<Slider>';
// // export const displayName = 'SliderExample';
// // export const description = 'Slider input for numeric values';
// // export const examples = [
// //   {
// //     title: 'Default settings',
// //     render() {
// //       return <SliderExample />;
// //     },
// //   },
// //   {
// //     title: 'Initial value: 0.5',
// //     render(){
// //       return <SliderExample value={0.5} />;
// //     },
// //   },
// //   {
// //     title: 'minimumValue: -1, maximumValue: 2',
// //     render(){
// //       return <SliderExample minimumValue={-1} maximumValue={2} />;
// //     },
// //   },
// //   {
// //     title: 'step: 0.25, tap to seek on iOS',
// //     render(){
// //       return <SliderExample step={0.25} tapToSeek={true} />;
// //     },
// //   },
// //   {
// //     title: 'onSlidingStart',
// //     render(){
// //       return <SlidingStartExample />;
// //     },
// //   },
// //   {
// //     title: 'onSlidingComplete',
// //     render(){
// //       return <SlidingCompleteExample />;
// //     },
// //   },
// //   {
// //     title: 'Custom min/max track tint color',
// //     render() {
// //       return (
// //         <SliderExample
// //           minimumTrackTintColor={'#00FF00'}
// //           maximumTrackTintColor={'red'}
// //           value={0.5}
// //         />
// //       );
// //     },
// //   },
// //   {
// //     title: 'Custom thumb tint color',
// //     render() {
// //       return <SliderExample thumbTintColor={'magenta'} />;
// //     },
// //   },
// //   {
// //     title: 'Custom thumb image',
// //     // render(){
// //     //   return <SliderExample thumbImage={require('./uie_thumb_big.png')} />;
// //     // },
// //   },
// //   {
// //     title: 'Custom thumb (network image)',
// //     platform: 'windows',
// //     render(){
// //       return (
// //         <SliderExample
// //           thumbImage={{
// //             uri: 'https://img.icons8.com/windows/50/000000/bus.png',
// //           }}
// //         />
// //       );
// //     },
// //   },
// //   {
// //     title: 'Custom track image',
// //     platform: 'ios',
// //     // render() {
// //     //   return <SliderExample trackImage={require('./slider.png')} />;
// //     // },
// //   },
// //   {
// //     title: 'Custom min/max track image',
// //     platform: 'ios',
// //     // render(){
// //     //   return (
// //     //     <SliderExample
// //     //       minimumTrackImage={require('./slider-left.png')}
// //     //       maximumTrackImage={require('./slider-right.png')}
// //     //     />
// //     //   );
// //     // },
// //   },
// //   {
// //     title: 'Inverted slider direction',
// //     render() {
// //       return <SliderExample value={0.6} inverted />;
// //     },
// //   },
// //   {
// //     title: 'Vertical slider',
// //     platform: 'windows',
// //     render() {
// //       return <SliderExample value={0.6} vertical />;
// //     },
// //   },
// // ];