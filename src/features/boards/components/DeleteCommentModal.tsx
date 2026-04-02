import { Modal } from '@/shared/ui/modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
};

export function DeleteCommentModal({ isOpen, onClose, onConfirmDelete }: Props) {
  return (
    <Modal isOpen={isOpen} close={onClose}>
      <Modal.Content size="sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onConfirmDelete();
          }}
        >
          <Modal.Header className="pb-4">
            <Modal.Title>댓글을 삭제할까요?</Modal.Title>
            <Modal.Description className="text-sm">
              삭제된 댓글은 복구할 수 없습니다.
            </Modal.Description>
          </Modal.Header>

          <Modal.Footer className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="h-12 w-full rounded-xl border border-slate-300 text-sm font-semibold"
            >
              취소
            </button>
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-red-500 text-sm font-semibold text-white hover:opacity-90"
            >
              삭제하기
            </button>
          </Modal.Footer>
        </form>
      </Modal.Content>
    </Modal>
  );
}
