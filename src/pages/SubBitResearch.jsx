import React from "react";
import "../styles/SubBitResearch.css";
import Header from "../components/Header";
const SubBitResearch = () => {
  return (
    <div className="submitresearchconainer">
      <Header routename="Subid Research Tool" />
      <div className="subbitresearchbodycontainer">
        <div
          class="main_box_style"
          style={{
            padding: "0 25px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "5px" }}></div>
          <h3>Subid Research Tool</h3>
          <table
            cellspacing="0"
            cellpadding="0"
            border="0"
            style={{ marginBottom: "15px" }}
            class="table_style"
          >
            <form
              action="#"
              method="post"
              name="get_data"
              onsubmit="return do_next();"
            ></form>
            <tbody>
              <tr>
                <td>
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    class="table_style"
                  >
                    <tbody>
                      <tr>
                        <td>
                          Use this tool to research traffic sources (Subids):
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            class="table_style"
                            style={{ marginTop: "10px" }}
                          >
                            <tbody>
                              <tr>
                                <td>Subid Search:</td>
                                <td style={{ width: "10px" }}></td>
                                <td>
                                  <input className="subbitinputitem"
                                    type="text"
                                    name="subID"
                                    id="subID"
                                    value=""
                                    size="40"
                                    style={{ padding: "2px 5px" }}
                                  />
                                </td>
                                <td style={{ width: "10px" }}></td>
                                <td colspan="2" align="center">
                                  <input className="submibgenreatebuton"
                                    type="submit"
                                    value="Generate"
                                    name="submit"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubBitResearch;
