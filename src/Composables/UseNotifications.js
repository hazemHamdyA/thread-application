import { reactive } from 'vue'

const notifications = reactive([])
const addNotification = function ({ message, timeout = null }) {
  const id = Math.random() + Date.now()
  notifications.push({ id, message })
  if (timeout) {
    setTimeout(removeNotification(id), timeout)
  }
}
const removeNotification = function (id) {
  const inx = notifications.findIndex((e) => e.id === id)
  notifications.splice(inx, 1)
}

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification
  }
}
