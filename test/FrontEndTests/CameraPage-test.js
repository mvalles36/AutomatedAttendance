import React from 'react';
import keydown, { Keys } from 'react-keydown';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import CameraPage from '../../src/public/components/CameraPage';

describe('<CameraPage />', function() {

  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    const resolved = new Promise((res) => res({ data: [{ type: 'admin' }] }));
    sandbox.stub(axios, 'get').returns(resolved);
    sandbox.stub(axios, 'post').returns(resolved);
  });

  afterEach(() => {
    sandbox.restore();
  });


  it('should render with a webcam component view', () => {
    const wrapper = shallow(<CameraPage/>);
    expect(wrapper.find('Webcam')).to.have.length(1);
  });

  // it('should call takeScreenshot on click', () => {
  //   const testFn = sinon.spy(CameraPage.prototype, 'takeScreenshot');
  //   const wrapper = mount(<CameraPage />);
  //   expect(testFn.called).to.equal(false);
  //   wrapper.find('.screenShotButton').simulate('click');
  //   expect(testFn.called).to.equal(true);
  //   testFn.restore();
  // });

  it('should not have img node when no screenshot has been stored', () => {
    const wrapper = shallow(<CameraPage />);
    expect(wrapper.find('img')).to.have.length(0);
  });

  it('should update state when unmounted', () => {
    const wrapper = mount(<CameraPage />);
    wrapper.unmount();
    setTimeout(() => {
      expect(wrapper.state().mounted).to.equal(false);
    }, 1000);
  });

  // it('should call sendLateEmails on button click', () => {
  //   const testFn = sinon.spy(CameraPage.prototype, 'sendLateEmails');
  //   const wrapper = mount(<CameraPage />);
  //   expect(testFn.called).to.equal(false);
  //   wrapper.find('.lateStudentButton').simulate('click');
  //   expect(testFn.called).to.equal(true);
  //   testFn.restore();
  // });

  it('should call populateAttendanceRecord on button click', () => {
    const testFn = sinon.spy(CameraPage.prototype, 'populateAttendanceRecord');
    const wrapper = mount(<CameraPage />);
    expect(testFn.called).to.equal(false);
    wrapper.find('.populateAttendanceRecord').simulate('click');
    expect(testFn.called).to.equal(true);
    testFn.restore();
  });

  it('should store records on click', () => {
    const testFn = sinon.spy(CameraPage.prototype, 'populateAttendanceRecord');
    const wrapper = mount(<CameraPage />);
    let date = new Date();
    wrapper.setState({ value: 'HRSF72', selectedTimeCutoff: date });
    expect(wrapper.state().selectedTimeCutoff).to.equal(date);
    expect(testFn.called).to.equal(false);
    wrapper.find('.populateAttendanceRecord').simulate('click');
    expect(testFn.called).to.equal(true);
    testFn.restore();
  });

});



describe('<CameraPage/> getSelectOptions', () => {

  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    const classData = JSON.parse('[[{"class_name":"HRSF72"},{"class_name":"HRSF76"}],[{"catalog":"def","db":"automatedattendance","table":"classes","orgTable":"classes","name":"class_name","orgName":"class_name","charsetNr":33,"length":150,"type":253,"flags":4097,"decimals":0,"zeroFill":false,"protocol41":true}]]');
    const resolved = new Promise((res) => res({ data: classData }));
    sandbox.stub(axios, 'get').returns(resolved);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call getSelectOptions on form click', () => {
    const testFn = sinon.spy(CameraPage.prototype, 'getSelectOptions');
    const wrapper = mount(<CameraPage />);
    expect(testFn.called).to.equal(false);
    wrapper.find('.classSelect').simulate('click');
    expect(testFn.called).to.equal(true);
    testFn.restore();
  });
});
