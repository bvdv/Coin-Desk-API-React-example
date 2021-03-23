import React from "react";
import { shallow, mount } from "enzyme";
import AnalysePage from "../components/analysis-page/analysis-page";
import AnalyzedTags from "../components/analyzed-tags/analyzed-tags"

describe("AnalysePage", () => {
  it("renders", () => {
    shallow(<AnalysePage />);
  });

  it("Click first button", () => {
    // const wrapper = shallow(<AnalysePage />);
    // const button = wrapper.find("div button");
    // const instance = wrapper.instance();
    // instance.handleSubmit = jest.fn(instance.handleSubmit);
    // button.simulate("click");
    // expect(instance.handleSubmit).toHaveBeenCalled();

    wrapper.find("input").instance().value = "http://google.com";
    expect(wrapper.find("input").instance().value).toEqual("http://google.com");
  });

  it("Check AnalyzedTags component", () => {
    const wrapper = mount(<AnalysePage />);
    expect(
      wrapper
        .find(".analyzed-tags p")
        .first()
        .text()
    ).toEqual("All unique tags:");
  });
});