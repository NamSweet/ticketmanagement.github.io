import DatePicker, { DatePickerProps } from 'antd/es/date-picker'
import Radio from 'antd/es/radio';
import Typography from 'antd/es/typography';
import dayjs from 'dayjs';
import React, { useState } from 'react'

const dateFormat = "MMMM, YYYY";
const weekFormat = "DD/MM";

const DatePickerComponent = () => {
    const [mode, setMode] = useState<"date" | "week">("date");

    const handleModeChange = (e: any) => {
        setMode(e.target.value);
      };

      const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} - ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

    const renderExtraFooter = () => {
        return (
          <Radio.Group value={mode} onChange={handleModeChange}>
            <Radio value="date">
              <Typography.Text>
                Theo ngày
              </Typography.Text>
            </Radio>
            <Radio value="week">
              <Typography.Text>
                Theo tuần
              </Typography.Text>
            </Radio>
          </Radio.Group>
        );
      };

  return (
    <DatePicker
      showToday={false}
      clearIcon={false}
      picker={mode}
      format={mode === "date" ? dateFormat : customWeekStartEndFormat}
      renderExtraFooter={renderExtraFooter}
    />
  )
}

export default DatePickerComponent
