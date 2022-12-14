import SearchForm from "./search-form"
import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"

export default {
  title: "Components/Search Form",
  component: SearchForm
} as ComponentMeta<typeof SearchForm>

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
)

function createActionHandler() {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    action("onSubmit")(event)
  }
}

export const Default = Template.bind({})
Default.args = {
  onSubmit: createActionHandler()
}
