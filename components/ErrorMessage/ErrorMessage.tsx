import styles from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  )
}
