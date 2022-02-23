import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const Calendar = () => {
  return (
    <>
      <h3>Calendar</h3>
      <div className="displaybox z-depth-5" style={{ width: 450, padding: 25 }}>
        <div>
          <h6>Tuesday 28th, 2021</h6>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <FormControl fullWidth>
            <InputLabel>Month</InputLabel>
            <Select label="Month" value="" style={{ width: 100 }}>
              <MenuItem value="">January</MenuItem>
              <MenuItem value="">Febuary</MenuItem>
              <MenuItem value="">March</MenuItem>
              <MenuItem value="">April</MenuItem>
              <MenuItem value="">May</MenuItem>
              <MenuItem value="">June</MenuItem>
              <MenuItem value="">July</MenuItem>
              <MenuItem value="">August</MenuItem>
              <MenuItem value="">September</MenuItem>
              <MenuItem value="">October</MenuItem>
              <MenuItem value="">November</MenuItem>
              <MenuItem value="">December</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select>
              <MenuItem value="">2020</MenuItem>
              <MenuItem value="">2021</MenuItem>
            </Select>
          </FormControl>
        </div>

        <table>
          <thead style={{ alignItems: "center" }}>
            <th className="calendar_day">M</th>
            <th className="calendar_day">T</th>
            <th className="calendar_day">W</th>
            <th className="calendar_day">T</th>
            <th className="calendar_day">F</th>
            <th className="calendar_day">S</th>
            <th className="calendar_day">S</th>
          </thead>
          <tbody>
            <tr>
              <td className="grey-text calendar_date">26</td>
              <td className="grey-text">27</td>
              <td className="grey-text">28</td>
              <td className="grey-text">29</td>
              <td className="grey-text">30</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>31</td>
              <td className="grey-text">1</td>
              <td className="grey-text">2</td>
              <td className="grey-text">3</td>
              <td className="grey-text">4</td>
              <td className="grey-text">5</td>
              <td className="grey-text">6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calendar;
