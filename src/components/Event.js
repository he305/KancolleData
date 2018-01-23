import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/Event.css'
import historical from '../Winter_2018.jpg';

class Event extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab><input type="button" value="Combined fleet"/></Tab>
                    <Tab><input type="button" value="Winter 2018 historical"/></Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab><input type="button" value="Carrier Task Force"/></Tab>
                            <Tab><input type="button" value="Surface Task Force"/></Tab>
                            <Tab><input type="button" value="Transport Escort"/></Tab>
                        </TabList>
                        <TabPanel>
                            <p>Main (fleet 1):</p>
                            <ul className="ulcombined">
                                <li>Maximum of 2 FBB/BB/BBV</li>
                                <li>Minimum of 2 CVL/CV/CVB</li>
                                <li>Maximum of 4 CVL/CV/CVB</li>
                                <li>SS/SSV cannot be flagship</li>
                            </ul>
                            <p>Escort (fleet 2):</p>
                            <ul className="ulcombined">
                                <li>Exactly 1 CL (CLT/CT does not count)</li>
                                <li>Minimum of 2 DD</li>
                                <li>Maximum of 2 CA/CAV</li>
                                <li>Maximum of 2 FBB or BB/BBV with Fast+ or Fastest speed (no slower BB/BBV allowed)</li>
                                <li>Maximum of 1 CVL (no CV/CVB allowed)</li>
                                <li>Maximum of 1 AV</li>
                                <li>SS/SSV cannot be flagship</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                        <p>Main (fleet 1):</p>
                        <ul className="ulcombined">
                            <li>Minimum 2 of a combination of CL/CLT/CA/CAV/FBB/BB/BBV</li>
                            <li>Maximum of 1 CV/CVB or 2 CVL</li>
                            <li>Maximum of 4 FBB/BB/BBV</li>
                            <li>Maximum of 4 CA/CAV</li>
                            <li>SS/SSV cannot be flagship</li>
                        </ul>
                        <p>Escort (fleet 2):</p>
                        <ul className="ulcombined">
                            <li>Exactly 1 CL (CLT/CT does not count)</li>
                            <li>Minimum of 2 DD</li>
                            <li>Maximum of 2 FBB or BB/BBV with Fast+ or Fastest speed (no slower BB/BBV allowed)</li>
                            <li>Maximum of 1 CVL (no CV/CVB allowed)</li>
                            <li>Maximum of 1 AV</li>
                            <li>SS/SSV cannot be flagship</li>
                        </ul>
                        </TabPanel>
                        <TabPanel>
                        <p>Main (fleet 1):</p>
                        <ul className="ulcombined">
                            <li>Minimum of 4 DE/DD</li>
                            <li>Maximum of 1 CVL with ASW stat (e.g., Taiyou)</li>
                            <li>CLT/CA/FBB/BB/CVL (without ASW stat)/CV/CVB/SS/SSV/AR not allowed (other ships can be used)</li>
                        </ul>
                        <p>Escort (fleet 2):</p>
                        <ul className="ulcombined">
                            <li>Minimum of 1 CL/CT (must be flagship)</li>
                            <li>Maximum of 2 CL/CT</li>
                            <li>Minimum of 3 DE/DD</li>
                            <li>Maximum of 2 CA/CAV</li>
                            <li>No other ships allowed</li>
                        </ul>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <img src={historical}></img>
                </TabPanel>
            </Tabs>
        )
    }
}

export default Event;