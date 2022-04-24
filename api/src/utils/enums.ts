export enum EntityType {
  GROWER = 'grower',
  DRIVER = 'driver',
  CONSUMER = 'consumer',
}

export enum DocumentStatus {
  PENDING = 'pending',
  REVISION = 'revision',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export enum JobStatus {
  CREATED = 'created',
  PUBLISHED = 'published',
  ASSIGNED = 'assigned',
  INPROGRESS = 'inprogress',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
}

export enum JobDetailStatus {
  COLLECT = 'collect',
  BILLED = 'billed',
  PAID = 'paid',
  VOID = 'void',
}

export enum InvoiceStatus {
  PENDING = 'pending',
  PAID = 'paid',
  VOID = 'void',
}

export enum AccountStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  SUSPENDED = 'suspended',
  ACTIVE = 'active',
}
