import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { TodosService } from "../../services/todos.service";
import {
  deleteTodoAction,
  deleteTodoFailureAction,
  deleteTodoSuccessAction,
  getTodosAction,
  getTodosFailureAction,
  getTodosSuccessAction,
  updateTodoAction,
  updateTodoFailureAction,
  updateTodoSuccessAction,
} from "../actions/todos.actions";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodosAction),
      mergeMap(() =>
        this.todosService.getList().pipe(
          map((todos) => getTodosSuccessAction({ todos })),
          catchError((error) => of(getTodosFailureAction({ error })))
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodoAction),
      mergeMap((result) =>
        this.todosService.update(result.todo).pipe(
          map((todo) => updateTodoSuccessAction({ todo })),
          catchError((error) => of(updateTodoFailureAction({ error })))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoAction),
      mergeMap((result) =>
        this.todosService.destroy(result.id).pipe(
          map(() => deleteTodoSuccessAction({ id: result.id })),
          catchError((error) => of(deleteTodoFailureAction({ error })))
        )
      )
    )
  );
}
