import { Modal, Form, Input } from "antd";
import { useMapContext } from "../context";
import { useGeocoding } from "../hooks/useGeocoding";

interface UserFormModalProps {
  lat: number;
  lng: number;
  onClose: () => void;
}

export function UserFormModal({ lat, lng, onClose }: UserFormModalProps) {
  const { addLocation } = useMapContext();
  const [form] = Form.useForm();
  const { data: address } = useGeocoding({ lat, lng });

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      addLocation({
        title: values.title,
        description: values.description,
        latitude: lat,
        longitude: lng,
        address: address || "Unknown location",
      });
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      title="Add Details"
      open={true}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="Save Location"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ title: "", description: "" }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "Please enter a title" },
            { min: 3, message: "Title should be at least 3 characters" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter a description" },
            { min: 5, message: "Description should be at least 5 characters" },
          ]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
