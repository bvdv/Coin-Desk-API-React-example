import React from "react";
import { shallow, mount } from "enzyme";
import AnalysePage from "../components/analysis-page/analysis-page";
import AnalyzedTags from "../components/analyzed-tags/analyzed-tags"

describe("AnalysePage", () => {
  it("renders", () => {
    shallow(<AnalyzedTags />);
  });

  it("Click first button", () => {
    const wrapper = mount(<AnalysePage />);
    wrapper.find("input").instance().value = "http://google.com";
    expect(wrapper.find("input").instance().value).toEqual("http://google.com");
    wrapper.find("div button").first().simulate("click");
    // expect(
    //   wrapper
    //     .find("span span")
    //     .first()
    //     .text()
    // ).toEqual("HTML, ");
  });
});