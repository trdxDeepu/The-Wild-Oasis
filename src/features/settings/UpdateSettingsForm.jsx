import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSetting } from "./useEditSetting";
import { useSettings } from "./useSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { updateSetting, isUpdating } = useEditSetting();

  if (isLoading) return <Spinner />;

  function handleUpdateSetting(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
