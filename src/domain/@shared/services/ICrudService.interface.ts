export default interface ICrudService<T> {
  getOne(filter: Partial<T>): T;
  getById(id: string): T;
  getMany(filter: Partial<T>): T;
  patch(id: string, dto: Partial<T>): T;
  update(entity: T): T;
  remove(id: string): T;
}
