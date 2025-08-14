import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Green View Landscaping',
  description:
    'Explore our comprehensive landscaping services including lawn maintenance, landscape design, hardscaping, tree services, irrigation, and seasonal cleanup.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
